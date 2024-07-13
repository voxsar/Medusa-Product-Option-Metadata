<p align="center">
  <a href="https://www.medusajs.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
</p>
<h1 align="center">
  Medusa Product Options and Option Values Metadata Plugin
</h1>
<h4 align="center">
  <a href="https://docs.medusajs.com">Documentation</a> |
  <a href="https://www.medusajs.com">Website</a>
</h4>
<p align="center">
  Building blocks for digital commerce
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
    <a href="https://www.producthunt.com/posts/medusa"><img src="https://img.shields.io/badge/Product%20Hunt-%231%20Product%20of%20the%20Day-%23DA552E" alt="Product Hunt"></a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

## Compatibility

This plugin is compatible with versions >= 1.8.0 of @medusajs/medusa.
Getting Started

# Medusa Product Options Metadata Plugin

## Description

The Medusa Product Options Metadata Plugin extends the product options API to include the ability to add metadata to options and option values. This plugin enables you to list all options of a product, manage individual options, and update their metadata.
API Endpoints

These endpoints allow you to manage product options and their metadata within your Medusa project.

#### List All Options for a Product

Endpoint: 

	GET /admin/products/{productId}/options

Description: Retrieves all options for a specified product.

Parameters:
    productId: The ID of the product.

#### Get a Specific Option for a Product

Endpoint: 

	GET /admin/products/{productId}/options/{optionId}

Description: Retrieves a specific option for a specified product.

Parameters:
	productId: The ID of the product.
	optionId: The ID of the product option.

#### Get all Values of a Specific Option for a Product

Endpoint: 

	GET /admin/products/{productId}/options/{optionId}/values

Description: Retrieves a specific option for a specified product.

Parameters:
	productId: The ID of the product.
	optionId: The ID of the product option.



#### Get a Specific Value of a Specific Option for a Product

Endpoint: 

	GET /admin/products/{productId}/options/{optionId}/values/{valueId}

Description: Retrieves a specific option for a specified product.

Parameters:
	productId: The ID of the product.
	optionId: The ID of the product option.
	valueId: The id of the value option

#### Update Metadata for a Specific Option

Endpoint: 

	POST /admin/products/{productId}/options/{optionId}

Description: Updates the metadata for a specific option of a specified product.

Parameters:
        productId: The ID of the product.
        optionId: The ID of the product option.

Request Body:

    json

    {
      "metadata": {
        "key": "value",
        "anotherKey": "anotherValue"
      }
    }

#### Update Metadata for a Specific Value in a Option

Endpoint: 

	POST /admin/products/{productId}/options/{optionId}/values/{valueId}

Description: Updates the metadata for a specific option of a specified product.

Parameters:
        productId: The ID of the product.
        optionId: The ID of the product option.
		valueId: The id of the value option

Request Body:

    json

    {
      "metadata": {
        "key": "value",
        "anotherKey": "anotherValue"
      }
    }

### Example Usage

To update the metadata for a specific product option, send a POST request to the /admin/products/{productId}/options/{optionId} endpoint with the new metadata in the request body.

bash

	curl -X POST http://your-medusa-url/admin/products/123/options/456 \
	-H "Content-Type: application/json" \
	-d '{
	"metadata": {
		"color": "red",
		"size": "M"
	}
	}'


## Visit the Quickstart Guide to set up a server.

Visit the Docs to learn more about our system requirements.
### What is Medusa

Medusa is a set of commerce modules and tools that allow you to build rich, reliable, and performant commerce applications without reinventing core commerce logic. The modules can be customized and used to build advanced ecommerce stores, marketplaces, or any product that needs foundational commerce primitives. All modules are open-source and freely available on npm.

Learn more about Medusa’s architecture and commerce modules in the Docs.
Roadmap, Upgrades & Plugins

You can view the planned, started and completed features in the Roadmap discussion.

## Follow the Upgrade Guides to keep your Medusa project up-to-date.

Check out all available Medusa plugins.

This setup allows for managing product options and their metadata effectively within your Medusa project.

## Community & Contributions

The community and core team are available in GitHub Discussions, where you can ask for support, discuss roadmap, and share ideas.

Join our Discord server to meet other community members.
Other channels

    GitHub Issues
    Twitter
    LinkedIn
    Medusa Blog