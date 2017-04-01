/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  abogdanov
 * Created: 01.04.2017
 */

DROP DATABASE IF EXISTS "payments-test";

CREATE DATABASE "payments-test"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE TABLE public.payments
(
    payments_id numeric NOT NULL,
    "time" timestamp without time zone NOT NULL,
    value numeric(200) NOT NULL,
    CONSTRAINT payments_pk PRIMARY KEY (payments_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.payments
    OWNER to postgres;