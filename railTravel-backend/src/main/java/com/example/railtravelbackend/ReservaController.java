package com.example.railtravelbackend;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/reservas")
@CrossOrigin
public class ReservaController {

    private final ReservaRepository reservaRepo;
    private final UsuarioRepository usuarioRepo;

    public ReservaController(ReservaRepository reservaRepo, UsuarioRepository usuarioRepo) {
        this.reservaRepo = reservaRepo;
        this.usuarioRepo = usuarioRepo;
    }

    @PostMapping("/{usuarioId}")
    public Reserva guardar(@PathVariable Long usuarioId, @RequestBody Reserva r) {

        Usuario usuario = usuarioRepo.findById(usuarioId).orElseThrow();

        r.setUsuario(usuario);

        return reservaRepo.save(r);
    }

    @GetMapping("/usuario/{usuarioId}")
    public List<Reserva> obtenerPorUsuario(@PathVariable Long usuarioId) {
        Usuario usuario = usuarioRepo.findById(usuarioId).orElseThrow();
        return usuario.getReservas();
    }

    @DeleteMapping("/{id}")
    public void cancelarReserva(@PathVariable Long id) {
        reservaRepo.deleteById(id);
    }
}