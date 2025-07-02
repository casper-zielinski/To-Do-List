# React basierete Theorie

## React - Libary oder Framework?

React ist offiziell eine JavaScript-Bibliothek (Libary), die von Facebook entwickelt wurde, kein Framework.

### Warum ist React eine Libary?

- **Fokusiert nur auf die UI (View)**: React kümmerst sich nur um das Rendering der UI-Komponenten und nicht um die Logik dahinter.
Alle anderen Aspekte, wie Routing, Datenbankzugriff, Sicherheit, State-Managment, API-Anbindung usw. Muss man mit anderen Tools kombinieren.

- **Flexibel**: React kann mit verschiedenen Bibliotheken und Frameworks kombiniert werden.

- **Nicht meinungsstark**: React gibt dir nicht vor, wie du deinen Code strukturieren musst, oder wie dein gesamter App-Flow aussehen soll - das ist Framework-typisch.

## Bootstrap - Libary oder Framework?

Bootsrap wird oft als CSS-Framework bezeichnet

### Warum Framework

- Es bietet eine Sammlung von Komponenten, Layouts und Stilen, mit dem Ziel, eine konsistente und benutzerfreundliche Benutzeroberfläche zu ermöglichen.

- Es ist mehr als nur eine Libary, weil es Regeln und Standards hat, für Design und Aufbau vorgibt (Grid-System, Komponenten, Responsive Desig etc.).

- Du arbeitest im **Rahmen der Bootstrap-Philosophie**.

- Du musst dich an die Regeln halten, um die Vorteile zu nutzen.

## Was ist der Unterschied zwischen einer Libary und einem Framework?

| **Merkmal** | **Libary** | **Framework** |
|------|------|------|
| **Kontrolle** | Du rufst die Libary auf | Das Framework ruft deinen Code auf ("Inversion of Control") |
| **Umfang** | kleinere, spezialisierte Funktionen | Breiter, deckt viele Teile einer Anwendung ab |
| **Freiheit** | Mehr Flexibilität | Oft eine feste Struktur und Konventionen |
| **Beispiel** | React,Lodash,jQuery | Angular, Ruby on Rails, Laravel, Django, Bootstrap (im UI-Kontext) |

## Zusammenfassung

- React: Libary (für UI)
- Bootstrap: Framework (für UI-Design)
- Libary: Du kontrollierst sie
- Framework: Es kontrolliert dich (mehr Struktur und Konventionen/Vorgaben)
