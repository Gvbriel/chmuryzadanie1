#LABORATORIUM PROGRAMOWANIA APLIKACJI W CHMURACH OBLICZENIOWYCH

CO - Czesc obowiazkowa
D - Dodatek

CO, P1
index.js

CO, P2
Dockerfile

CO, P3
docker build -t zadanie1:v1 .
docker run -p 80:9000 --name nodeserver -d zadanie1:v1
docker exec nodeserver cat ip.log

CO, P4
docker run --privileged --rm tonistiigi/binfmt --install all
sudo apt-get install -y qemu-user-static
docker buildx create --name builder
docker buildx use builder
docker buildx inspect --bootstrap
docker buildx build -t gvbriel/gp_zadanie1:server --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --push .

D1

D2, P1.1
docker pull registry
docker run -d -p 6677:5000 --name myregistry registry

D2, P1.2
docker pull ubuntu:latest

Zmiana tagu obrazu
docker tag ubuntu:latest localhost:6677/ubuntu-reg

Wypchniecie obrazu do utworzonego rejestru
docker push localhost:6677/ubuntu-reg
