package net.atpco.pfc.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class PfcConfiguration {

	/*
	 * @Bean(name="corsFilter") public FilterRegistrationBean corsFilter() {
	 * final FilterRegistrationBean frb = new FilterRegistrationBean(new
	 * MyCorsFilter()); frb.addUrlPatterns("/pfc/*"); frb.setOrder(1); return
	 * frb; }
	 */

	@Bean
	public FilterRegistrationBean corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
	    config.addAllowedOrigin("*");
	    config.addAllowedHeader("*");
	    config.addAllowedMethod("OPTIONS");
	    config.addAllowedMethod("HEAD");
	    config.addAllowedMethod("GET");
	    config.addAllowedMethod("PUT");
	    config.addAllowedMethod("POST");
	    config.addAllowedMethod("DELETE");
	    config.addAllowedMethod("PATCH");
	    source.registerCorsConfiguration("/**", config);
	    final FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
	    bean.setOrder(0);
	    return bean;
	}

}
