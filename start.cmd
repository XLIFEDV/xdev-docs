@echo off
chcp 65001 >nul
title XDEV Docs Gelistirici Yardimcisi
color 0A
setlocal EnableExtensions
cd /d "%~dp0"

goto menu

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
echo  7  - Git pull (remote degisiklikleri al)
echo  8  - ZORLA SENKRONLA (Repo = Local)  ^(FORCE PUSH^)
echo  0  - Cikis
echo(
set /p secim=Ne yapmak istiyorsun? ^>

if "%secim%"=="1" goto start_en
if "%secim%"=="2" goto start_tr
if "%secim%"=="3" goto push
if "%secim%"=="4" goto status
if "%secim%"=="5" goto branch
if "%secim%"=="6" goto build
if "%secim%"=="7" goto pull
if "%secim%"=="8" goto force_sync
if "%secim%"=="0" exit
goto menu

:start_en
call :header "LOKAL CALISTIR (EN)"
call npm run start
call :pauseBack

:start_tr
call :header "LOKAL CALISTIR (TR)"
call npm run start -- --locale tr
call :pauseBack

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

:pull
call :header "GIT PULL"
git pull
if errorlevel 1 (
  call :err "Pull basarisiz."
  call :pauseBack
)
call :ok "Pull tamamlandi."
call :pauseBack

:force_sync
call :header "ZORLA SENKRONLA (REPO = LOCAL)"

echo [UYARI] Bu islem GitHub reposunu PC'indeki halinle birebir yapar.
echo         Remote'da olup local'de olmayan dosyalar SILINIR.
echo         Tek kisiyim dedin, bu senin istedigin sey.
echo(
set /p onay=Devam edilsin mi? (E/H): 
if /I not "%onay%"=="E" (
  call :info "Iptal edildi."
  call :pauseBack
)

call :info "Once build kontrol ediliyor..."
call npm run build
if not "%errorlevel%"=="0" (
  call :err "Build basarisiz. Senkron iptal."
  call :pauseBack
)

call :cleanBuild

set /p mesaj=Commit mesaji gir (force sync): 
if "%mesaj%"=="" set "mesaj=force sync"

call :info "Degisiklikler stage ediliyor..."
git add .

call :info "Commit atiliyor..."
git commit -m "%mesaj%"
if errorlevel 1 (
  call :err "Commit atilamadi (degisiklik olmayabilir)."
  call :pauseBack
)

call :info "FORCE PUSH yapiliyor (repo=local)..."
git push --force
if errorlevel 1 (
  call :err "Force push basarisiz."
  call :pauseBack
)

call :ok "Repo artik local ile birebir."
call :pauseBack

:status
call :header "GIT STATUS"
git status
call :pauseBack

:branch
call :header "AKTIF BRANCH"
git branch --show-current
call :pauseBack
