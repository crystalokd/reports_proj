from .models import Sales
from django.db.models.signals import m2m_changed
from django.dispatch import receiver

@receiver(m2m_changed, sender=Sales.positions.through)
def calculate_total_price(sender, instance, action, **kwargs):
    print(action)