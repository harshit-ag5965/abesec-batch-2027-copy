package online.threadly.user_authentication.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration // adding some rules
@EnableWebSecurity // this is the rule now how auth is going to work
public class SecurityConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.csrf(AbstractHttpConfigurer::disable) // disable CSRF for APIs (common in REST)
        .authorizeHttpRequests(
            auth ->
                auth.requestMatchers("/health")
                    .permitAll() // allow without authentication
                        .requestMatchers(HttpMethod.POST, "/api/v1/users").permitAll() // 👈 signup allowed
                        .requestMatchers("/api/v1/users/**").authenticated() // require auth
                    .anyRequest()
                    .denyAll() // deny everything else (optional, for safety)
            ).httpBasic(Customizer.withDefaults());

    return http.build();
  }
}

