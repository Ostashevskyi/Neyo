from playwright.sync_api import expect

def test_footer_copyright(home):
    el = home.get_by_text("© 2025 NEYO. All rights reserved.", exact=True)
    expect(el).to_be_visible()
