package net.atpco.pfc.ui.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="net.atpco.pfc")
@EnableAutoConfiguration
public class PfcUiServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PfcUiServiceApplication.class, args);
	}
}
