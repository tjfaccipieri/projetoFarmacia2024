package com.farmacia.farmaciabackend.model;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class UsuarioLogin {
    private UUID id;
    private String nome;
    private String usuario;
    private String senha;
    private String foto;
    private String token;
}
