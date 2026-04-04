package com.example.railtravelbackend;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IryoProvider {

    public List<TrainResult> search(String origen, String destino) {
        return List.of(
                new TrainResult("Iryo", origen, destino, "07:30", "10:00", 35.50)
        );
    }
}