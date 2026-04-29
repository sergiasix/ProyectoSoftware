package com.example.railtravelbackend;

import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin
public class UsuarioController {

    private final UsuarioRepository usuarioRepo;
    private final BCryptPasswordEncoder encoder;

    public UsuarioController(UsuarioRepository usuarioRepo, BCryptPasswordEncoder encoder) {
        this.usuarioRepo = usuarioRepo;
        this.encoder = encoder;
    }

    @PostMapping
    public Usuario crear(@RequestBody Usuario u) {
        u.setPassword(encoder.encode(u.getPassword()));
        return usuarioRepo.save(u);
    }

    @PostMapping("/login")
    public Usuario login(@RequestBody Usuario u) {

        Usuario usuario = usuarioRepo.findByEmail(u.getEmail())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (!encoder.matches(u.getPassword(), usuario.getPassword())) {
            throw new RuntimeException("Contraseña incorrecta");
        }

        return usuario;
    }
}