package com.farmacia.farmaciabackend.configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.responses.ApiResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI springBlogpessoalOpenAPI() {

        return new OpenAPI()
                .info(new Info().title("Projeto Farmacia").description("Projeto Farmacia - Thiago Faccipieri")
                        .version("v0.0.1").license(new License().name("thiago.faccipieri").url("http://springdoc.org"))
                        .contact(new Contact().name("Thiago Faccipieri").url("https://github.com/tjfaccipieri")
                                .email("thiago.faccipieri@gmail.com")));
    }

    private ApiResponse createApiResponse(String message) {

        return new ApiResponse().description(message);

    }
}
