# Installieren der Entwicklungsumgebung

Diese Beschreibung gilt für die Systemunabhängige Bearbeitung. Die abweichende Beschreibung für Linux und Windows wird besonders gekennzeichnet. Das vorrangige Ziel ist, dass die Entwicklung sowohl auf Linux, Windows und Mac erfolgen kann. Das ganze auch noch gemischt. Ich kann also auf der Arbeit, mit meinem Windows Rechner, ein wenig an der Software schreiben und zu Hause, auf meinem Linux System, weiterentwickeln. Alles mit den gleichen Tools.

## prerequest

Alles was und wie man zur Grundinstalation benötigt.

### Visual Studio Code
Die Programmentwicklung erfolgt mit Visual Studio Code. Auf https://code.visualstudio.com/download findet man für jedes Betriebsystem den richtigen download.

### nodejs und npm
Node.js und Npm sind beides Programme die direkt installiert werden müssen. Alles andere wird dann mittels npm installiert.

LINUX: 
Im Terminal wird ausgeführt: 
> sudo apt install nodejs 
> sudo apt install npm

WINDOWS:
die Installation wird auf der Website heruntergeladen und installiert. Hier wird automatisch npm mit installiert.
> https://nodejs.org/en/download/

### typescript
Vistual Studio Code ist zwar für Typescript vorgesehen und vorbereitet, jedoch ist der Typescript-Compile nicht vorhanden. Er muss noch installiert werden. Er wird global installiert.
> sudo npm install -g typescript

Das Vorhandensein kann so geprüft werden
> tsc -v

### git und github
Ein Revisionscontrollsystem ist für die programmierung nicht unbedingt wichtig aber sehr sehr hilfreich. Installiert wird es so.

LINUX:
Im Terminal eingeben:
> sudo apt install git-all

WINDOWS:
> https://git-scm.com/download/win


## konfiguration

### VS Code konfigurieren
