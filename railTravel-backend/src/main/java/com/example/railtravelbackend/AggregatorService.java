package com.example.railtravelbackend;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AggregatorService {

    private final RenfeDataService renfe;
    private final OuigoProvider ouigo;
    private final IryoProvider iryo;

    public AggregatorService(RenfeDataService renfe, OuigoProvider ouigo, IryoProvider iryo) {
        this.renfe = renfe;
        this.ouigo = ouigo;
        this.iryo = iryo;
    }

    public List<TrainResult> searchAll(String origen, String destino) {

        List<TrainResult> resultados = new ArrayList<>();

        resultados.addAll(renfe.getTrains(origen, destino));
        resultados.addAll(ouigo.search(origen, destino));
        resultados.addAll(iryo.search(origen, destino));

        return resultados;
    }
}