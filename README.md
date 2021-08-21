# Wymagania

Instalacja [Docker Engine](https://docs.docker.com/engine/install/)

# Uruchomienie

Aby uruchomić aplikacje należy odpalić w konsoli poniższą instrukcje

```
docker-compose up -d --build
```

Aplikacja zostaje wystawiona pod adresem `http://localhost:8080

# Usuwanie aplikacji

Aby usunąć skutki działania aplikacji należy odpalić następującą instrukcje w konsoli.

```
docker-compose down --rmi local -v
```
