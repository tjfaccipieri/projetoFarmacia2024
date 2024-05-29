package com.farmacia.farmaciabackend.service;

import com.farmacia.farmaciabackend.model.Usuario;
import com.farmacia.farmaciabackend.repository.UsuarioRepository;
import com.farmacia.farmaciabackend.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    public Optional<Usuario> cadastrarUsuario(Usuario usuario) {
        if(usuarioRepository.findByUsuario(usuario.getUsuario()).isPresent()){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Usuário já existe!", null);
        }

        return null;
    }


}
