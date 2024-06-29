package com.farmacia.farmaciabackend.controller;

import com.farmacia.farmaciabackend.model.Produto;
import com.farmacia.farmaciabackend.repository.CategoriaRepository;
import com.farmacia.farmaciabackend.repository.ProdutoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    @GetMapping
    public ResponseEntity<List<Produto>> getAll(){
        return ResponseEntity.ok(produtoRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> getById(@PathVariable Long id){
        return produtoRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/nome/{nome}")
    public ResponseEntity<List<Produto>> getByNome(@PathVariable String nome){
        return ResponseEntity.ok(produtoRepository.findAllByNomeContainingIgnoreCase(nome));
    }

    @PostMapping
    public ResponseEntity<Produto> postProduto(@Valid @RequestBody Produto produto){
        if (categoriaRepository.existsById(produto.getCategoria().getId()))
            return ResponseEntity.status(HttpStatus.CREATED).body(produtoRepository.save(produto));

        return ResponseEntity.badRequest().build();
    }

    @PutMapping
    public ResponseEntity<Produto> putProduto(@Valid @RequestBody Produto produto) {

        if (produtoRepository.existsById(produto.getId())) {

            if (categoriaRepository.existsById(produto.getCategoria().getId()))
                return ResponseEntity.ok(produtoRepository.save(produto));
            else
                return ResponseEntity.badRequest().build();

        }

        return ResponseEntity.notFound().build();

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduto(@PathVariable Long id) {

        return produtoRepository.findById(id)
                .map(resposta -> {
                    produtoRepository.m(id);
                    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
