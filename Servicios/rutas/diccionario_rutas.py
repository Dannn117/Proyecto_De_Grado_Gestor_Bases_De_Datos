from flask import Blueprint, jsonify, request
from controladores .controlador_diccionario import obtener_diccionario, actualizar_diccionario

diccionario_bp = Blueprint('diccionario', __name__)

@diccionario_bp.route('/diccionario', methods=['GET'])
def get_diccionario():
    data = obtener_diccionario()
    return jsonify(data)

@diccionario_bp.route('/diccionario', methods=['POST'])
def post_diccionario():
    data = request.get_json()
    actualizar_diccionario(data)
    return jsonify({"message": "Diccionario actualizado con éxito"}), 200
