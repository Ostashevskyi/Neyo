import pytest
from playwright.sync_api import expect

CASES = [
  ("Designer",         'img[alt="Icon representing a designer using creative tools"]'),
  ("Developer",        'img[alt="Icon representing a developer writing code"]'),
  ("Marketer",         'img[alt="Icon representing a marketer analyzing growth metrics"]'),
  ("Copywriter",       'img[alt="Icon representing a copywriter creating written content"]'),
  ("Content Creator",  'img[alt="Icon representing a content creator producing video or media"]'),
  ("Startup",          'img[alt="Icon representing a startup with a lightbulb idea"]'),
]

@pytest.mark.parametrize("label, selector", CASES, ids=[c[0] for c in CASES])
def test_labeled_icons_are_visible(home, base_url, label, selector):
    icon = home.locator(selector)
    expect(icon, f"{label} icon").to_be_visible()

