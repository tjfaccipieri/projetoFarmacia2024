package com.farmacia.farmaciabackend.repository;

import com.farmacia.farmaciabackend.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UsuarioRepository extends JpaRepository<Usuario, UUID> {
    public List<Usuario> findAllByNomeContainingIgnoreCase(@Param("nome") String nome);
    public Optional<Usuario> findByUsuario(@Param("usuario") String usuario);
}
