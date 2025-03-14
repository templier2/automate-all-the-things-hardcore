variable "dns_name" {
  description = "Name of DNS zone for K8s"
  default     = "k8s-tests2.tst"
  type        = string
}

variable "location" {
  description = "place for your resources"
  default     = "East US"
  type        = string
}

variable "resource_group_name" {
  description = "name of resource group"
  default     = "automate-all-the-things-hardcore"
  type        = string
}

variable "subscription_id" {
  description = "id of used subscription"
  default     = "" # You should put your subscription ID here
  type        = string
}

variable "tags" {
  description = "It is a map of tags that are applied to all resources"
  default = {
    "application" = "automate-all-the-things-hardcore"
  }
  type = map(string)
}

variable "username" {
  description = "It is username to make objects more unique"
  default     = "AATT_APP_NAME"
  type        = string
}