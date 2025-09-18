package online.threadly.user_authentication.config;

import online.threadly.user_authentication.filter.JwtAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration // adding some rules
@EnableWebSecurity // this is the rule now how auth is going to work
public class SecurityConfig {

  private final JwtAuthenticationFilter jwtAuthenticationFilter;

  public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
    this.jwtAuthenticationFilter = jwtAuthenticationFilter;
  }

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.csrf(AbstractHttpConfigurer::disable) // disable CSRF for APIs (common in REST)
        .authorizeHttpRequests(
            auth ->
                auth.requestMatchers("/health")
                    .permitAll() // allow without authentication
                    .requestMatchers("/api/v1/auth/**")
                    .permitAll() // 👈 signup, login allowed
                    .requestMatchers("/api/v1/users/**")
                    .authenticated() // require auth
                    .anyRequest()
                    .denyAll() // deny everything else (optional, for safety)
            )
        .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
        .httpBasic(Customizer.withDefaults());

    return http.build();
  }
}
