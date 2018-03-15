import React from 'react'

// Backbone
import ProductModel from '../../Models/Product'

import ProductForm from '../../Components/Forms/Product'

module.exports = class Meep extends React.Component
{
	render()
	{
		return (
			<div>
				<h2>Redigera produkt</h2>

				<ProductForm />
			</div>
		);
	}
}