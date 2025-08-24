from playwright.sync_api import expect
import pytest

CASES = [
  ("X",         'img[alt="Follow us on X (formerly Twitter)"]'),
  ("Instagram",        'img[alt="Visit our Facebook page"]'),
  ("Facebook",         'img[alt="See our photos on Instagram"]'),
  ("TikTok",       'img[alt="Watch us on TikTok"]'),
]

@pytest.mark.parametrize("label, selector", CASES, ids=[c[0] for c in CASES])
def test_social_buttons(home, label, selector):
  social_btns = home.locator(selector)
  expect(social_btns, f"{label} icon").to_be_visible()