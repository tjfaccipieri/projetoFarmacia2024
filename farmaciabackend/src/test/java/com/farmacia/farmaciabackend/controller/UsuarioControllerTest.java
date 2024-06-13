package com.farmacia.farmaciabackend.controller;

import com.farmacia.farmaciabackend.model.Usuario;
import com.farmacia.farmaciabackend.repository.UsuarioRepository;
import com.farmacia.farmaciabackend.service.UsuarioService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.UUID;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class UsuarioControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @BeforeAll
    void start() {
        usuarioRepository.deleteAll();

        usuarioService.cadastrarUsuario(new Usuario(UUID.randomUUID(), "root", "root@root.com", "rootroot", "-"));

    }

    @Test
    @DisplayName("Não duplicar usuario")
    public void notDuplicate() {
        usuarioService.cadastrarUsuario(new Usuario(UUID.randomUUID(), "thiago", "thiago@email.com", "123456789", ""));

        HttpEntity<Usuario> body = new HttpEntity<Usuario>(new Usuario(UUID.randomUUID(), "thiago", "thiago@email.com", "123456789", ""));

        ResponseEntity<Usuario> resp = testRestTemplate.exchange("/usuarios/cadastrar", HttpMethod.POST, body, Usuario.class);

        assertEquals(HttpStatus.CONFLICT, resp.getStatusCode());

    }

}
