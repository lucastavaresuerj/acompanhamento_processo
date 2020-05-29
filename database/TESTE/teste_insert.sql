insert into Processos (Nome, Data_Inicio, `Status`) values 
	('Processo Chato', Now(), 'EM_ANDAMENTO'), 
    ('Processo Intediante', current_date() + 2, 'EM_ANDAMENTO'),
    ('Processo Legal', current_date() - 10, 'FINALIZADO')

insert into Documentos_Template (Nome, `Local`) values
	('Aprovação para Transporte', './Templates/Aprovacao_Transporte.docx'),
    ('Atestado de burrice', './Templates/Atestado_de_Burrice.docx'),
    ('Cu cagado', './Templates/Cu_Cagadado.docx'),
    ('Choro das Inimigas', './Templates/Choro_das_Inimigas.xlsx')

insert into Etapas (Nome) values
	('Transporte'),
    ('Deu Merda'),
    ('Funk')
    
insert into Documentos_Etapas (Etapa_ID, Documentos_Template_ID) values
	(1, 1),
    (2, 2),
    (2, 3),
    (2, 4),
    (3, 4)
    
insert into Documentos_Criados (Nome, `Local`, Data_Criacao, Documentos_Etapas_ID) values
	('Aprovação de transporte', './Documentos/1 - Aprovacao_Transporte.docx', now(), 1), 
    ('Aproveição do transporte', './Documentos/2 - Aprovacao_Transporte.docx', curdate() - 1, 1),
    ('Aprovação para transporte', './Documentos/3 - Aprovacao_Transporte.docx', curdate() - 12, 1),
	('Errooooouuuu', './Documentos/3 - Aprovacao_Transporte.docx', curdate() - 15, 2),
    ('Um cu', './Documentos/2 - Cu_Cagadado.docx', curdate() - 1, 3),
    ('Cu cagado, rasgado, ~gostoso~', './Documentos/3 - Cu_Cagadado.docx', curdate() - 13, 3),
    ('Chola naum', './Documentos/3 - Choro_das_Inimigas.xlsx', curdate() - 11, 4),
    ('Chora mais', './Documentos/3.1 - Choro_das_Inimigas.xlsx', curdate() - 10, 5)
    
insert into Processos_Documentos (Documentos_Criados_ID, Processos_ID) values 
	(1, 1),
    (2, 2),
    (3, 3),
    (4, 3),
    (5, 2),
    (6, 3),
    (7, 3),
    (8, 3)
