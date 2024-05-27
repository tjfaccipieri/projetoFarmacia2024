package com.farmacia.farmaciabackend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name="tb_usuarios")
@Getter
@Setter
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotBlank
    @Size(min=2)
    private String nome;

    @NotBlank
    @Email
    private String usuario;

    @NotBlank
    @Size(min = 6)
    private String senha;

    private String foto;

}
