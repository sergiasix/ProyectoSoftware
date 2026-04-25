package com.example.railtravelbackend;

//import com.example.railtravelbackend.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {
}