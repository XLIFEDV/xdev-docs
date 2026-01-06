@echo off
chcp 65001 >nul
title XDEV Docs Gelistirici Yardimcisi
color 0A

REM -------------------------------------------------
REM Cift tikla acinca kapanmasin diye /K ile yeniden ac
REM -------------------------------------------------
if /I not "%~1"=="__RUN" (
  cmd /k ""%~f0" __RUN"
  exit /b
)

:menu
cls
echo ======================================
echo        XDEV DOCS DEV HELPER
echo ======================================
echo.
echo Kullanilabilir Komutlar:
echo.
echo  1  - Lokal calistir (EN)
echo  2  - Lokal calistir (TR)
echo  3  - Push (Once build kontrol eder)
echo  4  - Git status
echo  5  - Branch goster
echo  6  - Build (npm run build)
echo  0  - Cikis
echo.
set /p secim=Ne yapmak istiyorsun? ^>

if "%secim%"=="1" goto start_en
if "%secim%"=="2" goto start_tr
if "%secim%"=="3" goto push
if "%secim%"=="4" goto status
if "%secim%"=="5" goto branch
if "%secim%"=="6" goto build
if "%secim%"=="0" goto cikis
goto menu

:start_en
cls
echo [INFO] Lokal site baslatiliyor (EN)...
echo       Durdurmak icin Ctrl+C kullan.
echo.
call npm run start
echo.
pause
goto menu

:start_tr
cls
echo [INFO] Lokal site baslatiliyor (TR)...
echo       Durdurmak icin Ctrl+C kullan.
echo.
call npm run start -- --locale tr
echo.
pause
goto menu

:build
cls
echo [INFO] Build aliniyor...
echo.
call npm run build
if errorlevel 1 (
  echo.
  echo [HATA] Build basarisiz oldu. Menuye donuluyor.
  pause
  goto menu
)
echo.
echo [OK] Build basarili.
pause
goto menu

:push
cls
echo ======================================
echo      PUSH (BUILD KONTROLLU)
echo ======================================

echo [INFO] Once build kontrol ediliyor...
call npm run build
if errorlevel 1 (
  echo [HATA] Build basarisiz. Push iptal edildi.
  pause
  goto menu
)

echo [OK] Build basarili.

REM Degisiklik var mi kontrol et
for /f %%A in ('git status --porcelain') do set "HAS_CHANGES=1"
if not defined HAS_CHANGES (
  echo [INFO] Degisiklik yok. Commit atlanacak, sadece push yapilacak...
  call git push
  if errorlevel 1 (
    echo [HATA] Push basarisiz oldu.
    pause
    goto menu
  )
  echo [OK] Push tamamlandi.
  pause
  goto menu
)

REM Degisiklik varsa commit iste
set "HAS_CHANGES="
set "mesaj="
set /p "mesaj=Commit mesaji gir: "
if "%mesaj%"=="" (
  echo [HATA] Commit mesaji bos olamaz.
  pause
  goto menu
)

call git add .
call git commit -m "%mesaj%"
if errorlevel 1 (
  echo [HATA] Commit atilamadi.
  pause
  goto menu
)

call git push
if errorlevel 1 (
  echo [HATA] Push basarisiz oldu.
  pause
  goto menu
)

echo [OK] Build + Commit + Push tamamlandi.
pause
goto menu

:status
cls
echo [INFO] Git status:
echo.
call git status
echo.
pause
goto menu

:branch
cls
echo [INFO] Mevcut branch:
echo.
call git branch --show-current
if errorlevel 1 (
  echo (branch bilgisi alinmadi, tum branchler:)
  call git branch
)
echo.
pause
goto menu

:cikis
echo Cikiliyor...
exit
