resource "azurerm_dns_zone" "k8s-tests" {
  name                = var.dns_name
  resource_group_name = azurerm_resource_group.automation.name
}

# resource "azurerm_role_assignment" "dns" {
#   scope                = azurerm_dns_zone.k8s-tests.id
#   role_definition_name = "DNS Zone Contributor"
#   principal_id         = azurerm_kubernetes_cluster.automation.web_app_routing[0].web_app_routing_identity[0].client_id
# }