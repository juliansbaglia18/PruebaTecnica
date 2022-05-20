--CREACIÓN DE TABLAS
CREATE TABLE tresource_type
(idResourceType INT NOT NULL IDENTITY(1,1),
created DATETIME,
descrip VARCHAR(200),
PRIMARY KEY (idResourceType));

CREATE TABLE tresource(
idResource INT IDENTITY(1,1),
created DATETIME,
descrip VARCHAR(200),
idResourceType INT,
PRIMARY KEY(idResource),
FOREIGN KEY(idResourceType) REFERENCES tresource_type(idResourceType));

--CREACIÓN DE REGISTROS
INSERT INTO tresource_type
(created, descrip)
VALUES (GETDATE(), 'Video');

INSERT INTO tresource_type
(created, descrip)
VALUES (GETDATE(), 'PDF Documentaci�n');

INSERT INTO tresource_type
(created, descrip)
VALUES (GETDATE(), 'PDF Enunciado');

INSERT INTO tresource_type
(created, descrip)
VALUES (GETDATE(), 'PDF Soluci�n');

SELECT * FROM tresource_type;

INSERT INTO tresource(created, descrip, idResourceType)
VALUES (GETDATE(), 'Perros.mp4', 1);

INSERT INTO tresource(created, descrip, idResourceType)
VALUES (GETDATE(), 'Anatom�a de perros.pdf', 2);

INSERT INTO tresource(created, descrip, idResourceType)
VALUES (GETDATE(), 'Gatos.mp4', 1);

INSERT INTO tresource(created, descrip, idResourceType)
VALUES (GETDATE(), 'Matem�ticas.pdf', 3);

INSERT INTO tresource(created, descrip, idResourceType)
VALUES (GETDATE(), 'SolucMatem�ticas.pdf', 4);

INSERT INTO tresource(created, descrip, idResourceType)
VALUES (GETDATE(), 'Anatom�a de gatos', 2);

SELECT * FROM tresource;

--CONSULTA
SELECT tresource_type.idResourceType, COUNT(tresource.idResourceType)
FROM tresource_type, tresource
WHERE tresource.idResourceType = tresource_type.idResourceType
GROUP BY tresource_type.idResourceType;