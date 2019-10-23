package org.tektutor;

import java.util.HashMap;

import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.IntegerSerializer;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.serializer.JsonSerializer;

@Configuration
public class KafkaPublisherConfigurator {
	 
	    @Bean
	    public ProducerFactory<Integer, Object> producerFactory() {
	    	
	        HashMap<String, Object> configProps = new HashMap<>();
	        
	        configProps.put( ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "127.0.0.1:9092" );
	        configProps.put( ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, IntegerSerializer.class);
	        configProps.put( ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
	        
	        return new DefaultKafkaProducerFactory<>(configProps);
	        
	    }
	 
	    @Bean
	    public KafkaTemplate<Integer, Object> kafkaTemplate() {
	        return new KafkaTemplate<>(producerFactory());
	    }
}
