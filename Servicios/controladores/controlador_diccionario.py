from utils.json_handler import leer_json, escribir_json

def obtener_diccionario():
    return leer_json('instance/diccionario.json')

def actualizar_diccionario(data):
    escribir_json('instance/diccionario.json', data)
