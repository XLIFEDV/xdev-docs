@echo off
chcp 65001 >nul
title XDEV Docs Gelistirici Yardimcisi
setlocal EnableExtensions

REM Proje klasorune gec
cd /d "%~dp0"

goto menu

REM =======================
REM YARDIMCI FONKSIYONLAR
REM =======================

:header
cls
echo ============================================
echo   %~1
echo ============================================
echo(
exit /b

:ok
echo [OK] %~1
exit /b

:info
echo [INFO] %~1
exit /b

:err
echo [HATA] %~1
exit /b

:pauseBack
echo(
pause
goto menu

:cleanBuild
if exist "build" (
  call :info "build/ klasoru siliniyor..."
  rmdir /s /q build
)
exit /b

REM =======================
REM MENU
REM =======================

:menu
call :header "XDEV DOCS DEV HELPER"

echo Kullanilabilir Komutlar:
echo(
echo  1  - Lokal calistir (EN)
echo  2  - Lokal calistir (TR)
echo  3  - Push (build kontrolu + build silinir)
echo  4  - Git status
echo  5  - Aktif branch
echo  6  - Build (npm run build)
echo  0  - Cikis
echo(
set /p secim=Ne yapmak istiyorsun? ^>

if "%secim%"=="1" goto start_en
if "%secim%"=="2" goto start_tr
if "%secim%"=="3" goto push
if "%secim%"=="4" goto status
if "%secim%"=="5" goto branch
if "%secim%"=="6" goto build
if "%secim%"=="0" exit
goto menu

REM =======================
REM LOKAL
REM =======================

:start_en
call :header "LOKAL CALISTIR (EN)"
call npm run start
call :pauseBack

:start_tr
call :header "LOKAL CALISTIR (TR)"
call npm run start -- --locale tr
call :pauseBack

REM =======================
REM BUILD
REM =======================

:build
call :header "BUILD CALISTIRILIYOR"
call npm run build
set BUILD_ERR=%errorlevel%

call :cleanBuild

if "%BUILD_ERR%"=="0" (
  call :ok "Build basarili."
) else (
  call :err "Build hatali."
)

call :pauseBack

REM =======================
REM PUSH
REM =======================

:push
call :header "BUILD + PUSH"

call npm run build
if not "%errorlevel%"=="0" (
  call :err "Build basarisiz. Push iptal."
  call :pauseBack
)

call :cleanBuild

set HAS_CHANGES=
for /f %%A in ('git status --porcelain') do set HAS_CHANGES=1

if not defined HAS_CHANGES (
  call :info "Degisiklik yok. Direkt push."
  git push
  call :pauseBack
)

set /p mesaj=Commit mesaji gir: 
if "%mesaj%"=="" (
  call :err "Commit mesaji bos."
  call :pauseBack
)

git add .
git commit -m "%mesaj%"
git push

call :ok "Push tamamlandi."
call :pauseBack

REM =======================
REM GIT
REM =======================

:status
call :header "GIT STATUS"
git status
call :pauseBack

:branch
call :header "AKTIF BRANCH"
git branch --show-current
call :pauseBack
