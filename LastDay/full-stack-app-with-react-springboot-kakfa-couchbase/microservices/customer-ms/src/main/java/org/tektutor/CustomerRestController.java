package org.tektutor;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import net.bytebuddy.description.modifier.MethodArguments;

@RestController
public class CustomerRestController {

	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private KafkaTemplate<Integer,Object> kakfaTemplate;
	
	private static final String TOPIC = "CUSTOMER_ADDRESS_UPDATE";
	
	@PostConstruct
	public void initCustomerRepo() {
		
		customerRepository.saveAll ( Stream.of( new Customer( 1, "Jegan", "Pune" ),
												new Customer( 2, "Hari", "Chennai")
		).collect( Collectors.toList()));

	}
	
	@CrossOrigin
	@RequestMapping(path="/newcustomer", consumes="application/json", method=RequestMethod.POST )
	public void createNewCustomer(@RequestBody Customer customer) {
		System.out.println(customer.toString());
		customerRepository.save(customer);
	}

	@CrossOrigin
	@GetMapping("/customers")
	public Iterable<Customer> getAllCustomers( ) {
		return  customerRepository.findAll();
	}
	
	@CrossOrigin
	@GetMapping("/update-address")
	public String updateCustomerAddress() {
				
			Customer customer = new Customer ( 1, "Jegan", "Austin" );
		
			kakfaTemplate.send( TOPIC,  customer );
		
			return "Customer shipping updated addressed is posted to Kakfa successfully !";
	}
	
}
