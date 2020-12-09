up:
	docker-compose up -d; docker-compose exec app yarn run build
build:
	docker-compose build --no-cache --force-rm
init:
	docker-compose up -d --build; docker-compose exec app yarn run build
remake:
	@make destroy
	@make init
stop:
	docker-compose stop
down:
	docker-compose down --remove-orphans
restart:
	@make down
	@make up
destroy:
	docker-compose down --rmi all --volumes --remove-orphans
destroy-volumes:
	docker-compose down --volumes --remove-orphans
ps:
	docker-compose ps
logs:
	docker-compose logs
logs-watch:
	docker-compose logs --follow
log-app:
	docker-compose logs app
yarn:
	docker-compose exec app yarn
app-build:
	docker-compose exec app yarn run build
app-build-prod:
	docker-compose exec app yarn run production
packaging-win:
	docker-compose exec app yarn run packaging-win
packaging-mac:
	docker-compose exec app yarn run packaging-mac