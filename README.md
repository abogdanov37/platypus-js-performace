# Performace tests for platypus-js platform
I create this tests to check how many hosts I need for my project if I build it on **platipus-js** platform.

## Start work
First of all you should clone this repository. Next step is download and [install PostgreSQL 9.6](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#windows). On this page select PostgreSQL version 9.6 and your operation system. Also you need to download [jmeter 3.1](http://apache-mirror.rbc.ru/pub/apache//jmeter/binaries/apache-jmeter-3.1.zip).
Last step is create database for tests. Go to folder in wich you clone this repo. Now execute file `src\app\payments-db.sql`. You can do it with pgAdmin tool for example.

## Configuration
So for tests I used following components
1. My laptop:
   - CPU: Intel(R) Core(TM) i7-6700HQ CPU @ 2.60GHz, 2592 МГц, cores 4, logical 8 x64
   - Memory: 16 Gb DDR4
   - HDD: Модель	NVMe SAMSUNG MZVPV512 500Gb SSD
2. platypus-js 5.11.2
3. PostgreSQL 9.6 with config:
```
    max_connections = 260
    shared_buffers = 512MB
    effective_cache_size = 6GB
    work_mem = 26214kB
    maintenance_work_mem = 512MB
    min_wal_size = 2GB
    max_wal_size = 4GB
    checkpoint_completion_target = 0.9
    wal_buffers = 16MB
    default_statistics_target = 100
```
4. Apache Tomcat 8.5.8 

## Results

 Clients       | Business logic  without DB | Business logic with DB | Business logic with DB (used trick with data model loading)       
 ------------- | -------------------------- | ---------------------- | ---------------------------------------------------------- 
  1            |   4000                     |  120                   |     130                     
  2            |   4000                     |  120                   |     219                     
  4            |   4000                     |  120                   |     432                     
  8            |   4000                     |  120                   |     830                     
  16           |   4000                     |  120                   |     1625                     
  32           |   4000                     |  120                   |     3010                     
  64           |   4000                     |  120                   |     3720                     
  128          |   4000                     |  120                   |     3640                     
  256          |   4000                     |  120                   |     3751                     
  512          |   4000                     |  120                   |     3520                     
  1024         |   4000                     |  120                   |     2820                     
