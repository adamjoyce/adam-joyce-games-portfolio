from django import template

register = template.Library()

@register.filter
def previous(list, current_index):
    try:
        return list[int(current_index) - 1]
    except:
        return ''

@register.filter
def next(list, current_index):
    try:
        return list[int(current_index) + 1]
    except:
        return ''
