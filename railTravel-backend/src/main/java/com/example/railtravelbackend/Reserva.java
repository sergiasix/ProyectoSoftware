package com.example.railtravelbackend;

import jakarta.persistence.*;

@Entity
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String operador;
    private String origen;
    private String destino;
    private String salida;
    private String llegada;
    private double precio;
    private int asiento;

    // getters y setters
}