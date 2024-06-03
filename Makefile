docker:
	docker build -t react-app:dev .

nginx: 
	docker run --name react-app -p 5173:80 -d react-app:dev

run: 
	docker run --name react-app -p 5173:5173 -d react-app:dev
	
 
.PHONY: docker run nginx

