@echo off
chcp 65001 >nul
title XDEV Docs Geliştirici Yardımcısı
color 0A

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
echo  3  - Push (commit mesaji sorar)
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
if "%secim%"=="0" exit
goto menu

:start_en
cls
echo [INFO] Lokal site baslatiliyor (EN)...
npm run start
if errorlevel 1 goto hata
goto basarili

:start_tr
cls
echo [INFO] Lokal site baslatiliyor (TR)...
npm run start -- --locale tr
if errorlevel 1 goto hata
goto basarili

:build
cls
echo [INFO] Build aliniyor...
npm run build
if errorlevel 1 goto hata
goto basarili

:push
cls
set /p mesaj=Commit mesaji gir: 
if "%mesaj%"=="" goto menu
git add .
git commit -m "%mesaj%"
if errorlevel 1 goto hata
git push
if errorlevel 1 goto hata
goto basarili

:status
cls
git status
pause
goto menu

:branch
cls
git branch --show-current
pause
goto menu

:hata
echo.
echo [HATA] Komut basarisiz oldu!
pause
goto menu

:basarili
echo.
echo [OK] Islem basariyla tamamlandi.
pause
goto menu
