package org.tektutor;


import org.springframework.data.couchbase.core.mapping.Document;

import com.couchbase.client.java.repository.annotation.Field;
import com.couchbase.client.java.repository.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@Getter
@Setter
@NoArgsConstructor
@Document
public class Customer {
	@Id
	private int id;
	
	@Field
	private String name;
	
	@Field
	private String shippingAddress;

	public Customer(int id, String name, String shippingAddress) {
		this.id = id;
		this.name = name;
		this.shippingAddress = shippingAddress;
	}	
	
	public int getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}
	
	public String getShippingAddress() {
		return shippingAddress;
	}

}
