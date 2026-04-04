package com.example.railtravelbackend;

public class TrainResult {

    private String operador;
    private String origen;
    private String destino;
    private String salida;
    private String llegada;
    private double precio;

    public TrainResult(String operador, String origen, String destino,
                       String salida, String llegada, double precio) {
        this.operador = operador;
        this.origen = origen;
        this.destino = destino;
        this.salida = salida;
        this.llegada = llegada;
        this.precio = precio;
    }

    public String getOperador() { return operador; }
    public String getOrigen() { return origen; }
    public String getDestino() { return destino; }
    public String getSalida() { return salida; }
    public String getLlegada() { return llegada; }
    public double getPrecio() { return precio; }
}