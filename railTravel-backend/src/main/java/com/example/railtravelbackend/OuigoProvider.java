package com.example.railtravelbackend;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OuigoProvider {

    public List<TrainResult> search(String origen, String destino) {
        return List.of(
                new TrainResult("Ouigo", origen, destino, "09:00", "11:30", 25.99)
        );
    }
}