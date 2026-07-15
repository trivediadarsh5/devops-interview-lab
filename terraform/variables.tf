variable "resource_group_name" {
  default = "rg-nodejs-lab"
}

variable "location" {
  default = "Central US"
}

variable "vnet_name" {
  default = "vnet-nodejs-lab"
}

variable "subnet_name" {
  default = "subnet-web"
}

variable "nsg_name" {
  default = "nsg-nodejs-lab"
}

variable "public_ip_name" {
  default = "pip-nodejs-lab"
}

variable "nic_name" {
  default = "nic-nodejs-lab"
}

variable "vm_name" {
  default = "vm-nodejs-lab"
}

variable "vm_size" {
  default = "Standard_D2s_v3"
}

variable "admin_username" {
  default = "azureuser"
}

variable "public_key_path" {
  default = "keys/id_rsa.pub"
}