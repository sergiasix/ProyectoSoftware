package com.example.railtravelbackend;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/reservas")
public class ReservaController {

    private final ReservaRepository repo;

    public ReservaController(ReservaRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Reserva guardar(@RequestBody Reserva r) {
        return repo.save(r);
    }

    @GetMapping
    public List<Reserva> listar() {
        return repo.findAll();
    }
}