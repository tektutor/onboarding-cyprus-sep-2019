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
@Document
public class Customer {
	@Id
	private int id;
	
	@Field
	private String name;
	
	@Field
	private String shippingAddress;

	public Customer() {
		
	}
	
	public Customer(int id, String name, String shippingAddress) {
		this.id = id;
		this.name = name;
		this.shippingAddress = shippingAddress;
	}
	
	public int getId() {
		return this.id;
	}
	
	public String getName() {
		return this.name;
	}
	
	public String getShippingAddress() {
		return this.shippingAddress;
	}
	
	public void setId( int id ) {
		this.id = id;
	}
	
	public void setName ( String name ) {
		this.name = name;
	}
	
	public void setShippingAdress( String address ) {
		this.shippingAddress = address;
	}
}
