from utils.json_handler import leer_json, escribir_json

def obtener_ddl_dml():
    return leer_json('instance/data.json')

def ejecutar_ddl_dml(query):
    # Aquí procesas el DDL o DML recibido y actualizas el JSON
    data = leer_json('instance/data.json')
    data.append(query)
    escribir_json('instance/data.json', data)
    return {"message": "Operación ejecutada con éxito"}
