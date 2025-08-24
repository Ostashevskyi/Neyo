from playwright.sync_api import expect


def test_description_text(home):
    description_text = home.get_by_text("Generate high-quality images from just a prompt — fast, easy, and customizable.", exact=True)
    expect(description_text).to_be_visible()