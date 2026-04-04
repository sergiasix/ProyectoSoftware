package com.example.railtravelbackend;

import com.example.railtravelbackend.TrainResult;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RenfeDataService {

    public List<TrainResult> getTrains(String origen, String destino) {

        List<TrainResult> lista = new ArrayList<>();

        lista.add(new TrainResult("Renfe", origen, destino, "08:00", "10:30", randomPrice()));
        lista.add(new TrainResult("Renfe", origen, destino, "12:00", "14:30", randomPrice()));

        return lista;
    }

    private double randomPrice() {
        return 20 + Math.random() * 40;
    }
}