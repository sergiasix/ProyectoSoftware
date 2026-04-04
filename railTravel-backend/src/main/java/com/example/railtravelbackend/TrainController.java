package com.example.railtravelbackend;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/trains")
public class TrainController {

    private final AggregatorService aggregator;

    public TrainController(AggregatorService aggregator) {
        this.aggregator = aggregator;
    }

    @GetMapping("/search")
    public List<TrainResult> search(
            @RequestParam String origen,
            @RequestParam String destino) {

        return aggregator.searchAll(origen, destino);
    }
}